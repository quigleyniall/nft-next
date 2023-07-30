import {db} from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const Suggestion = db.Suggestions;
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
   
    if (req?.method.toLowerCase() === 'post') {
         const {idea} = req.body;
        const suggestion = new Suggestion({idea});


        // save user
        await suggestion.save();
        return res.json({success: true})
    }
   
    if (req.method.toLowerCase() === 'get') {
        const results = await Suggestion.find();
        return res.json(results);
    }

    if (req.method.toLowerCase() === 'delete') {
        try {
            const {id} = req.body;
            await Suggestion.deleteOne({id});
            return res.json({success: true})
        } catch (err) {
            console.log(err);
        }
       
    }
}