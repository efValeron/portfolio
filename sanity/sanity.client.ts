import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "g9f0cyip",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: false,
};

const client = createClient(config);

export default client;