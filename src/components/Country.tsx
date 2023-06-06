import { useCallback, useState } from "react";

const Country = ({ getScoreByCountry }: { getScoreByCountry: (countryName: string) => number }) => {

    const [countryName, setCountryName] = useState<string>('');

    const getScore = useCallback((): number => {
        return getScoreByCountry(countryName);
    }, [getScoreByCountry, countryName]);

    const handleCountryName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountryName(event?.currentTarget.value)
    }

    return (
        <div className="row">
            <div className="country">
                <form>
                    The Country:
                    <input className="country-input" type="text" value={countryName} onChange={handleCountryName} />
                </form>
            </div>
            <div className="average">
                The Average: {getScore()}
            </div>
            <div className="horiz-bar" style={{ width: `${getScore() > 0 ? 2*getScore() : 0}px` }}>&nbsp;</div>
        </div>
    )
}

export default Country;