import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

export default function Home() {
  const dispatch = useDispatch();
  const fetchedCountries = useSelector((state) => state.countriesReducer.countries);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_COUNTRIES",
    });
    console.log(fetchedCountries);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {fetchedCountries?.map((c) => (
          <h1>{c.name}</h1>
        ))}
      </main>
    </div>
  );
}