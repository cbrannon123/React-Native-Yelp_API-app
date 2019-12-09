import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';
// import { TextInput } from 'react-native-gesture-handler';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price will be ==== $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title='$'
                    
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title='$$'
                    
                />
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title='$$$'
                    
                />
                <ResultsList
                    results={filterResultsByPrice('$$$$')}
                    title='$$$$'
                    
                />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;