import type { NextApiRequest, NextApiResponse } from "next";

// fake login
export default (req: NextApiRequest, res: NextApiResponse) => {
	const body = req.body;
	const { email } = body;
	const { password } = body;

	if (email === "johndoe@mail.com" && password === "commerce") {
		res.status(200).json({ status: true });
	} else {
		res.status(401).json({ status: false });
	}
};
