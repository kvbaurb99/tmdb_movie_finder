// header image animation
export const headerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
}

// search input animation
export const searchVariant = {
    hidden: { opacity: 0, transform: 'translateX(20%)' },
    visible: { opacity: 1, transform: 'translateX(0)', transition: { duration: 1.5, delay: 1.5 } },
}

// header title animation
export const searchDescriptionVariant = {
    hidden: { opacity: 0, transform: 'translateX(-20%)' },
    visible: { opacity: 1, transform: 'translateX(0)', transition: { duration: 1.5, delay: 2.5 } },
}

// fade movies
export const fadeMovies = {
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { duration: 1, delay: 1.5 }}
}