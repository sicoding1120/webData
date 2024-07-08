import { NextApiRequest, NextApiResponse } from "next";
import db from "../server/db"

const api = (req:NextApiRequest, res: NextApiResponse) => {
  try {
    db.query(" SELECT * FROM table_one", (err, result) => {
      if (err) throw err
      res.status(200).json(result)
    })
  } catch (err) {
    if(err) throw err
  }
}

export default api