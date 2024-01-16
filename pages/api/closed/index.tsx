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

        // https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm
        conn.query(
            `SELECT owner.name, CloseDate, Name, Amount, StageName FROM Opportunity WHERE StageName = 'Closed Won' AND CloseDate = ${req.query.closedDate}  LIMIT 1000`
        )
            .on('record', function (record: any) {
                console.log(record)
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
                res.status(500).send(err);
                return reject;
            })
            .run({ autoFetch: true, maxFetch: 4000 });
    })
}

