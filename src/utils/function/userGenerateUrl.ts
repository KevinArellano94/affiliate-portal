

export const generateAffiliateUrl = (link: any) => {
    const TARGET_URL = import.meta.env.VITE_TARGET_URL as string;

    const baseUrl = `${ TARGET_URL }/affiliate`;
    const params = new URLSearchParams({
        utm_source: link.platform.toLowerCase(),
        linkId: link.id
    });
    return `${baseUrl}?${params.toString()}`;
};
