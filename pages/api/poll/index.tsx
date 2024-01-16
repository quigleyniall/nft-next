import {db} from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const Poll = db.Polls;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
   
    if (req?.method.toLowerCase() === 'post') {
         const {...poll} = req.body;
        const newPoll = new Poll({...poll});


        // save user
        await newPoll.save();
        return res.json({success: true})
    }
   
    if (req.method.toLowerCase() === 'get') {
        const results = await Poll.find();
        return res.json(results);
    }

    if (req.method.toLowerCase() === 'delete') {
        try {
            const {id} = req.body;
            await Poll.deleteOne({id});
            return res.json({success: true})
        } catch (err) {
            console.log(err);
        }
       
    }
}