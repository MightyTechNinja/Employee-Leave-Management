import express from "express";
import { get, merge } from "lodash";
import keys from "../config/keys";

import { getUserBySessionToken } from "../db/users";

export const isOwner = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const { id } = req.params;
        const currentUserId = get(req, "identity._id") as string | undefined;

        if (!currentUserId) {
            return res.sendStatus(403);
        }

        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }

        next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const isAuthenticated = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const sessionToken = req.cookies[keys.cookieKey];

        if (!sessionToken) {
            return res.redirect("/login");
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if (!existingUser) {
            return res.redirect("/login");
        }

        merge(req, { identity: existingUser });

        res.status(200).send({ loggedIn: true });
        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
