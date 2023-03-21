// pages
import Home from "./content/Home";
import About from "./content/About";
import Signup from "./content/Signup";
import Products from "./content/productList/Index";
import Profile from "./content/profile/Index";
import Settings from "./content/profile/Settings";
import Transactions from "./content/profile/Transactions";
import UserInfo from "./findtalent/userinfo/Index";
import MySkills from "./content/profile/Skills";

import Business from "./business/Index";
import AllProducts from "./business/AllProducts";
import FindTalent from "./findtalent/Index";
import AllTalents from "./findtalent/AllTalents";
import LearnSkills from "./learnskills/Index";
import AllSkills from "./learnskills/AllSkills";
import AddSkill from "./learnskills/AddSkill";
import CreateSkill from "./learnskills/CreateSkill";
import SkillDetails from "./learnskills/SkillDetails";

import BecomeSeller from "./components/BecomeSeller/Index";
import BasicInfo from "./components/onBoarding/BasicInfo";

// other
import {FC} from "react";
import { profile } from "console";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
        {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    },
    {
        key: 'signup-route',
        title: 'Signup',
        path: '/signup',
        enabled: true,
        component: Signup
    },
    {
        key: 'profile-route',
        title: 'Profile',
        path: '/profile',
        enabled: true,
        component: Profile
    },
    {
        key: 'settings-route',
        title: 'Settings',
        path: '/profile/settings',
        enabled: true,
        component: Settings
    },
    {
        key: 'transactions-route',
        title: 'Transactions',
        path: '/profile/transactions',
        enabled: true,
        component: Transactions
    },
    {
        key: 'myskills-route',
        title: 'MySkills',
        path: '/profile/myskills',
        enabled: true,
        component: MySkills
    },
    {
        key: 'addskill-route',
        title: 'AddSkill',
        path: '/addskill',
        enabled: true,
        component: AddSkill
    },
    {
        key: 'create-skill-route',
        title: 'CreateSkill',
        path: '/create-skill',
        enabled: true,
        component: CreateSkill
    },
    {
        key: 'skill-details-route',
        title: 'SkillDetails',
        path: '/skill-details',
        enabled: true,
        component: SkillDetails
    },    
    {
        key: 'business-route',
        title: 'Business',
        path: '/business',
        enabled: true,
        component: Business
    },
    {
        key: 'allproducts-route',
        title: 'AllProducts',
        path: '/allproducts',
        enabled: true,
        component: AllProducts
    },
    {
        key: 'findtalent-route',
        title: 'FindTalent',
        path: '/findtalent',
        enabled: true,
        component: FindTalent
    },
    {
        key: 'alltalents-route',
        title: 'AllTalents',
        path: '/alltalents',
        enabled: true,
        component: AllTalents
    },
    {
        key: 'learnskills-route',
        title: 'LearnSkills',
        path: '/',
        enabled: true,
        component: LearnSkills
    },
    {
        key: 'allskills-route',
        title: 'AllSkills',
        path: '/allskills',
        enabled: true,
        component: AllSkills
    },
    {
        key: 'userinfo-route',
        title: 'UserInfo',
        path: '/userinfo',
        enabled: true,
        component: UserInfo
    },
    {
        key: 'becomeSeller-route',
        title: 'BecomeSeller',
        path: '/become-seller',
        enabled: true,
        component: BecomeSeller
    },
    {
        key: 'basic-info-route',
        title: 'BasicInfo',
        path: '/basic-info',
        enabled: true,
        component:  BasicInfo
    }
    
        
]