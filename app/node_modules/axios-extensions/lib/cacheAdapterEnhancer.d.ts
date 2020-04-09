/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-10-12
 */
import { AxiosAdapter, AxiosPromise } from 'axios';
declare module 'axios' {
    interface AxiosRequestConfig {
        forceUpdate?: boolean;
        cache?: boolean | ICacheLike<any>;
    }
}
export interface ICacheLike<T> {
    get(key: string): T | undefined;
    set(key: string, value: T, maxAge?: number): boolean;
    del(key: string): void;
}
export declare type Options = {
    enabledByDefault?: boolean;
    cacheFlag?: string;
    defaultCache?: ICacheLike<AxiosPromise>;
};
export default function cacheAdapterEnhancer(adapter: AxiosAdapter, options?: Options): AxiosAdapter;
