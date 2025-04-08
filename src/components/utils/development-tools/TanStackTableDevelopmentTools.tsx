import React from "react";

import { isProduction } from "../../../common/env";

export const TanStackTableDevelopmentTools = isProduction
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/react-table-devtools").then((result) => ({
				default: result.ReactTableDevtools,
			}))
		);
