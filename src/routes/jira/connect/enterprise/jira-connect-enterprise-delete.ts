import { NextFunction, Request, Response } from "express";
import { GitHubServerApp } from "models/github-server-app";

export const JiraConnectEnterpriseDelete = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		req.log.debug("Received Jira Connect Enterprise Server DELETE request");

		await GitHubServerApp.uninstallServer(req.body.serverUrl);

		res.status(200).send({ success: true });
		req.log.debug("Jira Connect Enterprise Server successfully deleted.");
	} catch (error) {
		res.status(200).send({ success: false, message: "Failed to delete GitHub Enterprise Server." });
		return next(new Error(`Failed to DELETE GitHub Enterprise Server: ${error}`));
	}
};
