import React, { useState, useEffect, useContext } from "react";
import { WatchListContext } from "./MovieContext";
import { getMovieRecom } from "../config/getMovieRecom";
import { motion } from "framer-motion"; 

const AI = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { watchlist } = useContext(WatchListContext);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const data = await getMovieRecom(watchlist);
        console.log("Watchlist:", watchlist);
        setRecommendations(data.recommendations);
      } catch (err) {
        setError("Failed to fetch recommendations");
      }
      setLoading(false);
    };

    if (watchlist.length > 0) {
      fetchRecommendations();
    }
  }, [watchlist]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          🎬 AI Movie Recommendations
        </h2>
      </motion.div>

      {loading && (
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl bg-gray-200">
              <div className="p-6 flex items-center">
                <div className="w-12 h-16 rounded-md bg-gray-300 animate-pulse"></div>
                <div className="ml-4 flex-1">
                  <div className="h-4 w-3/4 bg-gray-300 animate-pulse mb-3 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-300 animate-pulse rounded"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shimmer"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-md"
        >
          <div className="flex items-center">
            <div className="text-red-500 text-xl mr-2">⚠️</div>
            <p className="text-red-700">{error}</p>
          </div>
          <p className="mt-2 text-red-600 text-sm">Try refreshing or check your connection.</p>
        </motion.div>
      )}

      {!loading && !error && recommendations.length > 0 ? (
        <motion.ul
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {recommendations.map((movie, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg mr-3">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {movie.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 ml-12 mb-4">
                {movie.reason}
              </p>
              
              <div className="ml-12 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${movie.confidence}%` }}
                  ></div>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {movie.confidence}%
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        !loading && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl"
          >
            <div className="text-5xl mb-4">🎥</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No recommendations yet. Add movies to your watchlist!
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Browse Movies
            </button>
          </motion.div>
        )
      )}
    </div>
  );
};

export default AI;