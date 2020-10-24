import {ObjectId} from "mongodb";
import {IResolvers} from "apollo-server-express";
import {Database, Listing} from "../../../types";

export const listingResolvers: IResolvers = {
    Query: {
        listings: async (
            _root: undefined,
            _args: {},
            {db}: { db: Database }
        ): Promise<Listing[]> => {
            return await db.listings.find({}).toArray();
        }
    },
    Mutation: {
        deleteListing: async (
            _root: undefined,
            {id}: { id: ObjectId },
            {db}: { db: Database }
        ): Promise<Listing> => {
            const deletedResponse = await db.listings.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deletedResponse.value) {
                throw new Error("failed to delete listing");
            }

            return deletedResponse.value;
        }
    }
}