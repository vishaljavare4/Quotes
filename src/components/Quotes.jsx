import QuotesCard from "./sub-components/QuotesCard";
import QuotesData from "../utils/QuotesData";
const Quotes = () => {
    return (
        <>
            <div className="text-black w-full p-2 gap-4 mt-[6%]  items-center justify-center flex flex-col">
                <h1 className="text-[30px]"> Quotes</h1>
                {
                    QuotesData.map(each => (
                        <QuotesCard key={each.from} Quotes={each.text} Author={each.from}/>
                    ))
                }
            </div>
        </>
    )
}
export default Quotes;