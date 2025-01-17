export enum EnvironmentEnum {
	test = "test",
	development = "development",
	production = "production",
}

export enum BooleanEnum {
	true = "true",
	false = "false",
}

// All variables below were defined by DataPortal. Do not change their values as it will affect our metrics logs and dashboards.
export enum AnalyticsEventTypes {
	ScreenEvent = "screen", // user navigates to a particular screen, tab, drawer, modal, or inline-dialog
	UiEvent = "ui", // user interacts with a user interface element such as a button, text field, or link
	TrackEvent = "track", // user completes a product action e.g. submits form
	OperationalEvent = "operational" // help measure usages or performance of implementation detail
}

// All variables below were defined by DataPortal. Do not change their values as it will affect our metrics logs and dashboards.
export enum AnalyticsScreenEventsEnum {
	GitHubConfigScreenEventName = "gitHubConfigurationScreen",
	ConnectAnOrgScreenEventName = "connectAnOrgProductCount",
	SelectGitHubProductEventName = "selectGitHubProductScreen"
}

export enum AnalyticsTrackEventsEnum {
	GitHubServerUrlErrorTrackEventName = "gitHubServerUrlSubmittedError",
	GitHubServerUrlTrackEventName = "gitHubServerUrlSubmitted"
}

// Adding session information to express Request type
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Express {
		interface Request {
			session: {
				jiraHost?: string;
				githubToken?: string;
				gitHubUuid?: string;
				temp?:  {
					[key: string]: any;
				}
			};
		}
	}
}

/**
 * Provides some configuration parameters that a user can define for a given repo. It's stored
 * against a repo in the database.
 */
export interface Config {
	deployments?: {

		/**
		 * globs that are used in the `mapEnvironment()` function to match a given environment with one
		 * of the valid Jira environment types.
		 */
		environmentMapping?: {
			development?: string[];
			testing?: string[];
			staging?: string[];
			production?: string[];
		}
	}
}
