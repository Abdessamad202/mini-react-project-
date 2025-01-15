import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div
      initial={{ width:0,whiteSpace: 'nowrap', overflow: 'hidden' }}
      animate={{width: '100%'}}
      exit={{ width: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Bienvenue sur ma page !</h1>
    </motion.div>
  );
}
export default HomePage;
