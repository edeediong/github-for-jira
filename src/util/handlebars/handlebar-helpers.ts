import hbs from "hbs";
import { isPlainObject } from "lodash";

export const concatStringHelper = (...strings: string[]) => strings.filter((arg: unknown) => typeof arg !== "object").join(" ");
export const toLowercaseHelper = (str?: string) => !isPlainObject(str) && str?.toString?.().toLowerCase() || "";
export const replaceSpaceWithHyphenHelper = (str?: string) => !isPlainObject(str) && str?.toString?.().replace(/ /g, "-") || "";

export const registerHandlebarsHelpers = () => {
	hbs.registerHelper("toLowerCase", toLowercaseHelper);

	hbs.registerHelper("replaceSpaceWithHyphen", replaceSpaceWithHyphenHelper);
	hbs.registerHelper("concat", concatStringHelper);

	hbs.registerHelper(
		"ifAllReposSynced",
		(numberOfSyncedRepos, totalNumberOfRepos) =>
			numberOfSyncedRepos === totalNumberOfRepos
				? totalNumberOfRepos
				: `${numberOfSyncedRepos} / ${totalNumberOfRepos}`
	);

	hbs.registerHelper("repoAccessType", (repository_selection: string) =>
		repository_selection === "all" ? "All repos" : "Only select repos"
	);

	hbs.registerHelper("isNotConnected", (syncStatus) => syncStatus == null);

	hbs.registerHelper(
		"inProgressOrPendingSync",
		(syncStatus) => syncStatus === "IN PROGRESS" || syncStatus === "PENDING"
	);

	hbs.registerHelper("failedSync", (syncStatus) => syncStatus === "FAILED");

	hbs.registerHelper("failedConnectionErrorMsg", (deleted) =>
		deleted
			? "The GitHub for Jira app was uninstalled from this org."
			: "There was an error getting information for this installation."
	);

	// TODO - remove after removing old github config hbs
	hbs.registerHelper("connectedStatus", (syncStatus) =>
		syncStatus === "FINISHED" ? "Connected" : "Connect"
	);

	hbs.registerHelper("isModal", (modalId) => modalId === "jiraDomainModal");


	hbs.registerHelper("isMissingPermissions", (syncWarning: string) => syncWarning?.includes("Invalid permissions for"));
};
