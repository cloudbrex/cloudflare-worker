# Cloudflare Worker Redirect

This Cloudflare Worker code block handles requests and redirects them to a specified base URL. It also excludes certain paths from the redirection process.

## Requirements

- Latest version of Wrangler

## Usage

To use this code block, follow these steps:

- Clone this repository: git clone https://github.com/cloudbrex/worker-redirect.git
- Navigate to the cloned repository: cd worker-redirect
- Update the account_id and zone_id variables in the wrangler.toml file with your own values.
- Update the domain variable in the index.ts file with your own domain name.
- Deploy the worker with wrangler publish.

## How It Works

When a request is received, the handleRequest function is called. This function checks if the requested path is in the excludedPaths array. If it is, the request is passed on to the next handler in the chain. If not, the function constructs a destination URL using the specified base, the requested pathname, search, and hash. Finally, the function returns a redirect response to the destination URL with a status code of 301.

## License

This code block is licensed under the MIT License.
