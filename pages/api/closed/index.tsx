import type { NextApiRequest, NextApiResponse } from 'next'
import { getSFDCConnection } from '../util/session';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const conn = await getSFDCConnection(req, res);
    if (!conn) return;

    //@ts-ignored
    var records: Array = [];
    return new Promise((resolve, reject) => {
        //@ts-ignored
        conn.query(
            "SELECT owner.name, CloseDate, Name, Amount, StageName FROM Opportunity WHERE StageName = 'Closed Won' LIMIT 1000"
            // 'SELECT FirstName, LastName FROM User LIMIT 1000'
        )
            .on('record', function (record: any) {
                records.push({
                    name: record.Owner.Name,
                    opportunityName: record.Name,
                    amount: record.Amount,
                    stage: record.StageName,
                    closeDate: record.CloseDate
                });
            })
            .on('end', function () {
                res.status(200).json(records);
                return resolve;
            })
            .on('error', function (err: any) {
                console.error(err);
                // return reject;
            })
            .run({ autoFetch: true, maxFetch: 4000 });
    })
}

