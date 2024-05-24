const customConfig = {
    FORCE_BODY: true,
    ALLOWED_ATTR: ['style', 'class', 'type', 'href', 'rel', 'onclick','selected','src',
       'data-val-required','data-val','background-color','font-color','id','role',
       'aria-labelledby','aria-haspopup','aria-expanded','data-bs-toggle','data-bs-target',
       'cellspacing','width','height','text-align',
       'function','name','value','url','asp-action','asp-controller','method','checked'
    ],
   // must add these tag manually if use this option.
   ALLOWED_TAGS: [
       'link','figure','table','theader','caption','thead','tr','th','td','dd','dt','dl','ul','li',
       'head','body','tbody','select','option','input','footer','b','i','main','g','h5','em','strong',
       'form','nav','a','img','html','div','span','svg','path','button','script','meta','label'
   ]
}
