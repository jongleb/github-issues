import { normalize, schema } from 'normalizr';

const issue = new schema.Entity('issues');
const repositories = new schema.Entity('repositories');

export const issuesSchema = issue;
export const repositoriesSchema = repositories;
