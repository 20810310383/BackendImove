const express=require('express');
const {createAdminGuard}=require('./admin_guard');
function createAnalyticsAdminRouter({getDb,getAnalytics}){const r=express.Router();const {requireAdmin,permit}=createAdminGuard({getDb});r.use(requireAdmin);r.get('/',permit('reports.view'),async(req,res)=>{try{res.json(await getAnalytics().report(req.query.days));}catch(e){res.status(500).json({message:e.message});}});return r;}
module.exports={createAnalyticsAdminRouter};
