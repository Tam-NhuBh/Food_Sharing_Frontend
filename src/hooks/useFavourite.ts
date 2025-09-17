import { useEffect, useMemo, useState } from "react";
import useAuth from "./useAuth";

export function useFavourite(recipeId: string | number) {
    const { user } = useAuth();
    const [isFav, setIsFav] = useState(false);

    const key = useMemo(() => {
        if (!user) return null;
        return `favourites_${user.uid ?? user.email}`;
    }, [user]);

    const getFavs = (): string[] => {
        if (!key) return [];
        try {
            const raw = JSON.parse(localStorage.getItem(key) ?? "[]") as Array<string | number>;
            const normalized = Array.from(new Set(raw.map((v) => String(v))));

            localStorage.setItem(key, JSON.stringify(normalized));
            return normalized;
        } catch {
            return [];
        }
    }

    const setFavs = (list: string[]) => {
        if (!key) return;
        const checkUnique = Array.from(new Set(list.map(String)));
        localStorage.setItem(key, JSON.stringify(checkUnique))
    }

    const recipeKey = String(recipeId);

    useEffect(() => {
        if (!key) {
            setIsFav(false)
            return;
        }
        const favs = getFavs();
        setIsFav(favs.includes(recipeKey))
    }, [key, recipeKey]);

    const toggleFav = () => {
        if (!key) return false;

        const favs = getFavs();

        if (favs.includes(recipeKey)) {
            setFavs(favs.filter((id) => id !== recipeKey));
            setIsFav(false);

        } else {
            setFavs([...favs, recipeKey]);
            setIsFav(true);
        }
        return true;
    }
    return { isFav, toggleFav, canUse: Boolean(key) };
}