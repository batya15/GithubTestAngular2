import { IGithubUser } from './igithub-user';

export interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: IGithubUser[];
  page?: number;
}
