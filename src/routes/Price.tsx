import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

interface PriceDataSummary {
    oneHourPrice: number | undefined;
    weekPrice: number | undefined;
    monthPrice: number | undefined;
    yearPrice: number | undefined;
}

interface PriceProps {
    coinId: string;
}

const Headers = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: 28px;
`;

function Price({ coinId }: PriceProps) {
    const { isLoading, data } = useQuery<PriceData>(["price", coinId], () =>
        fetchCoinTickers(coinId)
    );

    const summary: PriceDataSummary = {
        oneHourPrice: data?.quotes.USD.percent_change_1h,
        weekPrice: data?.quotes.USD.percent_change_7d,
        monthPrice: data?.quotes.USD.percent_change_30d,
        yearPrice: data?.quotes.USD.percent_change_1y,
    };

    return (
        <div>
            {isLoading ? (
                "Loading price..."
            ) : (
                <>
                    <Headers>
                        Now with 1 hour ago? ${summary.oneHourPrice}
                    </Headers>
                    <Headers>Now with 1 week ago? ${summary.weekPrice}</Headers>
                    <Headers>
                        Now with 1 month ago? ${summary.monthPrice}
                    </Headers>
                    <Headers>Now with 1 year ago? ${summary.yearPrice}</Headers>
                </>
            )}
        </div>
    );
}

export default Price;
