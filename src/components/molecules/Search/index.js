import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  SearchContainer,
  Form,
  Input,
  Button,
  Svg,
  ResultsContainer,
  ResultItem,
  ProductImage,
  ProductName,
} from "./styles";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const algoliaSearch = require("algoliasearch");
const algoliaClient = algoliaSearch(
  "GPCHY1L0BB",
  "9dcf2e26798c61432a707c12c049ad28"
);
const productsIndex = algoliaClient.initIndex("dev_PRODUCTS");

const Search = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [barOpened, setBarOpened] = useState(false);
  const inputFocus = useRef();

  const algoliaSearch = (text) => {
    productsIndex
      .search(text, {
        getRankingInfo: true,
        analytics: false,
        enableABTest: false,
        hitsPerPage: 7,
        attributesToRetrieve: "*",
        attributesToSnippet: "*:20",
        snippetEllipsisText: "…",
        responseFields: "*",
        page: 0,
        facets: ["*"],
      })
      .then(({ hits }) => {
        setSuggestions(hits);
      });
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (document.getElementById("search_container").contains(e.target)) {
        setBarOpened(true);
      } else {
        setBarOpened(false);
      }
    });
  }, []);

  useEffect(() => {
    if (input && input.length > 0) {
      //&& input.length % 2 == 0){
      algoliaSearch(input);
    }
  }, [input]);

  return (
    <SearchContainer barOpened={barOpened} id="search_container">
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (input) {
            router.push(`/busca?query=${input}`);
            setBarOpened(false);
          }
        }}
        barOpened={barOpened}
      >
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="O que seu pet precisa?"
        />
        <Button type="submit" barOpened={barOpened}>
          <Svg viewBox="-1 0 136 136.21852" barOpened={barOpened}>
            <path d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031" />
          </Svg>
        </Button>

        <ResultsContainer
          id="results_container"
          barOpened={barOpened}
          suggestions={suggestions}
        >
          {suggestions.map((suggestion) => (
            <a href={suggestion.url_key} key={suggestion.sku}>
              <ResultItem>
                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <ProductImage>
                      <img src={suggestion.image} />
                    </ProductImage>
                  </Grid>
                  <Grid item xs={10}>
                    <ProductName>
                      <h4>{suggestion.name}</h4>
                    </ProductName>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={9}>
                    <Divider light />
                  </Grid>
                </Grid>
              </ResultItem>
            </a>
          ))}
        </ResultsContainer>
      </Form>
    </SearchContainer>
  );
};

export default Search;
