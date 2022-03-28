import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Code, Transaction } from 'mongodb';
import { Ruleset } from 'src/ruleset/entities/ruleset.entity';
import { MongoRepository } from 'typeorm';
import { CreateCashbackDto } from './dto/create-cashback.dto';
import { UpdateCashbackDto } from './dto/update-cashback.dto';

@Injectable()
export class CashbackService {
  constructor(
    @InjectRepository(Ruleset)
    private readonly ruleSetRepository: MongoRepository<Ruleset>,
  ) {}
  create(createCashbackDto: CreateCashbackDto) {
    return 'This action adds a new cashback';
  }

  async findAll() {
    let fenFactor = 0;
    const pipeline = [
      {
        $lookup: {
          from: 'transactions',
          let: {
            startDate: '$startDate',
            endDate: '$endDate',
            amount: '$cashback',
            redemptionLimit: '$redemptionLimit',
            budget: '$budget',
            minTransactions: '$minTransactions',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $gte: ['$date', '$$startDate'],
                    },
                    {
                      $lt: ['$date', '$$endDate'],
                    },
                  ],
                },
              },
            },
            {
              $addFields: {
                transactionId: '$id',
                amount: '$$amount',
              },
            },
          ],
          as: 'transactions',
        },
      },
      {
        $addFields: {
          transactions: {
            $function: {
              body: new Code(
                'function (transactions, budget,minTransactions) {\n                let sum=0;\n                let hashMap=Array(transactions.length).fill(0)\n                transactions.forEach((value)=>{\n                    if(value.customerId){\n                    hashMap[value.customerId]+=1;\n                    }\n                })\n                 return transactions.filter((transaction)=>{\n                    if(budget && sum<budget && minTransactions){\n                        if(transaction.customerId && hashMap[transaction.customerId]>=minTransactions){\n                           sum+=transaction.amount;\n                           return transaction;  \n                        }\n                        if(transaction.customerId==undefined){\n                             sum+=transaction.amount;\n                         return transaction;\n                        }\n                    }\n                    if(!budget){return transaction}\n                   // return hashMap\n                })\n               \n              }',
              ),
              args: ['$transactions', '$budget', '$minTransactions'],
              lang: 'js',
            },
          },
        },
      },
      {
        $project: {
          budget: 1.0,
          minTransactions: 1.0,
          totalCashback: 1.0,
          transactions: {
            $slice: ['$transactions', '$redemptionLimit'],
          },
        },
      },

      {
        $unwind: {
          path: '$transactions',
        },
      },

      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                transactionId: '',
                amount: '',
              },
              '$transactions',
            ],
          },
        },
      },
      {
        $project: {
          _id: 0.0,
          transactionId: 1.0,
          amount: 1.0,
        },
      },
    ];

    return await this.ruleSetRepository.aggregate(pipeline).toArray();
  }

  findOne(id: number) {
    return `This action returns a #${id} cashback`;
  }

  update(id: number, updateCashbackDto: UpdateCashbackDto) {
    return `This action updates a #${id} cashback`;
  }

  remove(id: number) {
    return `This action removes a #${id} cashback`;
  }
}
