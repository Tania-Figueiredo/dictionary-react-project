import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DefinitionCard from "./DefinitionCard";
import SectionBox from "./SectionBox";
import PhotosGallery from "./PhotosGallery";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [dictionaryData, setDictionaryData] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function fetchDictionaryData(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return axios.get(url);
  }

  function fetchPhotosData(word) {
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
    return axios.get(pexelsApiUrl, {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    });
  }

  function parseDictionaryData(data) {
    const entry = data[0];
    const word = entry.word;
    const phonetic =
      entry.phonetic || entry.phonetics?.find((p) => p.text)?.text || "";

    const meanings = entry.meanings || [];

    const allDefinitions = meanings
      .flatMap((m) => m.definitions.map((d) => d.definition))
      .filter((d) => d && d.trim() !== "");

    const getByType = (type) =>
      meanings
        .filter((m) => m.partOfSpeech === type)
        .flatMap((m) => m.definitions.map((d) => d.definition))
        .filter(Boolean)
        .slice(0, 3);

    const getSynonyms = () =>
      meanings
        .flatMap((m) => m.definitions)
        .flatMap((d) => d.synonyms || [])
        .filter((s, i, arr) => arr.indexOf(s) === i)
        .slice(0, 3);

    return {
      word,
      phonetic,
      definitions: allDefinitions,
      adjectives: getByType("adjective"),
      nouns: getByType("noun"),
      synonyms: getSynonyms(),
    };
  }

  function search(event) {
    event.preventDefault();
    if (!keyword.trim()) return;

    fetchDictionaryData(keyword)
      .then((response) => {
        const parsed = parseDictionaryData(response.data);
        setDictionaryData(parsed);
      })
      .catch((error) => {
        console.error("Error in Dictionary API:", error);
        setDictionaryData(null);
      });

    fetchPhotosData(keyword)
      .then((response) => {
        setPhotos(response.data.photos.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error in Pexels API:", error);
        setPhotos([]);
      });
  }

  return (
    <div className="Dictionary container py-4">
      <h1 className="mb-4 text-center">Dictionary App</h1>
      <form onSubmit={search} className="mb-4">
        <div className="input-group">
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
            className="form-control"
            value={keyword}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {dictionaryData && (
        <>
          <DefinitionCard
            word={dictionaryData.word}
            phonetic={dictionaryData.phonetic}
            definitions={dictionaryData.definitions}
          />
          <div className="row">
            <SectionBox title="Adjectives" items={dictionaryData.adjectives} />
            <SectionBox title="Nouns" items={dictionaryData.nouns} />
            <SectionBox title="Synonyms" items={dictionaryData.synonyms} />
          </div>
        </>
      )}

      {photos.length > 0 && <PhotosGallery photos={photos} keyword={keyword} />}
    </div>
  );
}
