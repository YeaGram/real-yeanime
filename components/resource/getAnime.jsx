import { useState, useEffect } from "react";

const TopAnime = "https://api.jikan.moe/v4/top/anime";
const RandomAnime = "https://api.jikan.moe/v4/random/anime";

// GetTopAnime
export const _GetTopAnimes = (time, limit) => {
  const [GetTopAnime, SetGetTopAnime] = useState([]);
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
      fetch(`${TopAnime}?limit=${limit}`)
        .then((res) => res.json())
        .then((data) => SetGetTopAnime(data.data));
    }, time);
  }, []);

  return [Loading, GetTopAnime];
};

// GetTopAiringAnime
export const _GetTopAiringAnimes = (time) => {
  const [GetTopAiringAnime, SetGetTopAiringAnime] = useState([]);
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
      fetch(`${TopAnime}?filter=airing&limit=5`)
        .then((res) => res.json())
        .then((data) => SetGetTopAiringAnime(data.data));
    }, time);
  }, []);

  return [Loading, GetTopAiringAnime];
};
export const _GetTopUpcomingAnimes = (time) => {
  const [GetTopUpcomingAnime, SetGetTopUpcomingAnime] = useState([]);
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
      fetch(`${TopAnime}?filter=Upcoming&limit=5`)
        .then((res) => res.json())
        .then((data) => SetGetTopUpcomingAnime(data.data));
    }, time);
  }, []);

  return [Loading, GetTopUpcomingAnime];
};
export const _GetTopFavoriteAnimes = (time) => {
  const [GetTopFavoriteAnime, SetGetTopFavoriteAnime] = useState([]);
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
      fetch(`${TopAnime}?filter=favorite&limit=5`)
        .then((res) => res.json())
        .then((data) => SetGetTopFavoriteAnime(data.data));
    }, time);
  }, []);

  return [Loading, GetTopFavoriteAnime];
};
export const _GetTopMovieAnimes = (time) => {
  const [GetTopMovieAnime, SetGetTopMovieAnime] = useState([]);
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
      fetch(`${TopAnime}?type=movie&limit=5`)
        .then((res) => res.json())
        .then((data) => SetGetTopMovieAnime(data.data));
    }, time);
  }, []);

  return [Loading, GetTopMovieAnime];
};
export const _GetRandomAnimes = (time) => {
  const [GetRandomAnime, SetGetRandomAnime] = useState();
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
      setInterval(() => {
        fetch(`${RandomAnime}`)
          .then((res) => res.json())
          .then((data) => SetGetRandomAnime(data.data));
      }, 30000);
    }, time);
  }, []);

  return [Loading, GetRandomAnime];
};
