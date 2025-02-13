

export const userRewardfulLinks = async (rewardfulAffiliateID: string) => {
    return {
        "pagination": {
            "previous_page": null,
            "current_page": 1,
            "next_page": null,
            "count": 3,
            "limit": 25,
            "total_pages": 1,
            "total_count": 3
        },
        "data": [
            {
                "id": "e415a8c0-d229-4ee5-a42e-356515dacb1b",
                "url": "https://www.humblefunding.co/?via=kevin",
                "token": "kevin",
                "visitors": 7,
                "leads": 0,
                "conversions": 0,
                "affiliate_id": "c6383d6c-f05b-4550-905c-0d513354a495"
            },
            {
                "id": "93780db6-adcb-4391-b09e-56061977c744",
                "url": "https://www.humblefunding.co/?via=test",
                "token": "test",
                "visitors": 0,
                "leads": 0,
                "conversions": 0,
                "affiliate_id": "9e05317f-06ff-4030-9051-e2ae90dfa75c"
            },
            {
                "id": "c337507a-cc84-487f-aae6-c6716bee3cfb",
                "url": "https://www.humblefunding.co/?via=kevin-youtube",
                "token": "kevin-youtube",
                "visitors": 0,
                "leads": 0,
                "conversions": 0,
                "affiliate_id": "c6383d6c-f05b-4550-905c-0d513354a495"
            }
        ]
    }
}