
import { cache } from 'react';
import Butter from 'buttercms';
import { ButterCMSPageBaseModel } from '@/shared/models/butterCmsModels';
import { butterCmsAPIKey } from '../../../environment';


export const butterService = Butter(butterCmsAPIKey);


// async function fetchDataFromButterCMS(method: keyof ButterStatic, params: string) {
//     try {
//         const response = await (butterService[method] as any, params);
//         return response;
//     } catch (error) {
//         console.error('Error fetching data from ButterCMS:', error);
//         throw error;
//     }
// }
// export const getPageDataFromButterCMS = (slug: string) => fetchDataFromButterCMS('page.retrieve' as keyof ButterStatic, slug);

// export const getCollectionDataFromButterCMS = (collection: string) => fetchDataFromButterCMS('content.retrieve' as keyof ButterStatic, collection);

// export const fetchBlogPostFromButterCMS = (slug: string) => fetchDataFromButterCMS('post.retrieve' as keyof ButterStatic, slug);

// export const fetchBlogCategoryFromButterCMS = (categorySlug: string) => fetchDataFromButterCMS('category.retrieve' as keyof ButterStatic, categorySlug);


export const getPageDataFromButterCMS = cache(async (slug: string) => {
    try {
        const response = await butterService.page.retrieve('*' as any, slug);
        return response as ButterCMSPageBaseModel;
    } catch (error) {
        console.error('Error fetching page data from ButterCMS:', error);
        throw error;
    }
});

export const getCollectionDataFromButterCMS = cache(async (collection: string) => {
    try {
        const response = await butterService.content.retrieve([collection], { levels: 3 });
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${collection} data from ButterCMS:`, error);
        throw error;
    }
});

export const fetchBlogPostFromButterCMS = cache(async (slug: string) => {
    try {
        const response = await butterService.post.retrieve(slug);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog post from ButterCMS:', error);
        throw error;
    }
});

export const fetchBlogCategoryFromButterCMS = cache(async (categorySlug: string) => {
    try {
        const response = await butterService.post.retrieve(categorySlug);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog post from ButterCMS:', error);
        throw error;
    }
});

export const getNavigationMenuItem = cache(async (menuItem: string) => {
    try {
        const response = await butterService.content.retrieve([menuItem], {
            levels: 3
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching blog post from ButterCMS:', error);
        throw error;
    }
})
