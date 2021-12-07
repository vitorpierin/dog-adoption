import {Router} from 'express';
import * as PageController from '../controllers/pageController'; 
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home );
router.get('/dogs', PageController.dog); 
router.get('/cats', PageController.cat); 
router.get('/fishes', PageController.fish); 

router.get('/search', SearchController.search)

export default router;