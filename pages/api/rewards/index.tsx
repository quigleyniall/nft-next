import {db} from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const Reward = db.Rewards;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
   
    if (req?.method.toLowerCase() === 'post') {
         const {body} = req.body;
         console.log(body)
        const reward = new Reward({...body});


        // save user
        await reward.save();
        return res.json({success: true})
    }
   
    if (req.method.toLowerCase() === 'get') {
        const results = await Reward.find();
        return res.json(results);
    }

    if (req.method.toLowerCase() === 'delete') {
        try {
            const {id} = req.body;
            await Reward.deleteOne({id});
            return res.json({success: true})
        } catch (err) {
            console.log(err);
        }
       
    }
}