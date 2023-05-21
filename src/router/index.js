import { createRouter, createWebHashHistory} from "vue-router";    
 const routes=[ {                                                  
         path:'/',                                                 
         name:'Home',                                              
         component: ()=> import ("/src/router/views/HomePage.vue")       
     },
     {                                                  
        path:'/add',                                                 
        name:'Add',                                              
        component: ()=> import ("/src/router/views/AddPage.vue")       
    },
    {                                                  
       path:'/list',                                                 
       name:'List',                                              
       component: ()=> import ("/src/router/views/ListPage.vue")       
   },
   {                                                  
      path:'/collection',                                                 
      name:'Collection',                                              
      component: ()=> import ("/src/router/views/CollectionPage.vue")       
  }]                                                            
 const router =createRouter({                                      
     history:createWebHashHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 