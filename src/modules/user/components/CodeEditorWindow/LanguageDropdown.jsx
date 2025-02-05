import React, { useEffect } from "react";
import Select from "react-select";
import { customStyles } from "./constants/customStyles";
import { languageOptions } from "./constants/languageOptions";
import axios from "axios";

const LanguagesDropdown = ({ onSelectChange }) => {
    const [languages, setLanguages] = React.useState([]);
    useEffect(() => {
        const apiCaller = async () => {
            const options = {
                method: 'GET',
                url: 'https://judge0-extra-ce.p.rapidapi.com/languages',
                headers: {
                    'x-rapidapi-key': 'ae1d4db102mshca27e059c4571a1p177bfcjsn7e49f5986951',
                    'x-rapidapi-host': 'judge0-extra-ce.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
               const languageData= response.data.map((item) => {
                    return ({
                        id: item.id,
                        name: item.name,
                        label: item.name,
                        value: item.name,
                    })
                });
                setLanguages(languageData);
            } catch (error) {
                console.error(error);
            }
        }
        apiCaller();
    }, [])
    return (
        <Select
            placeholder={`Filter By Category`}
            options={languages}
            styles={customStyles}
            defaultValue={languageOptions[0]}
            onChange={(selectedOption) => onSelectChange(selectedOption)}
        />
    );
};

export default LanguagesDropdown;