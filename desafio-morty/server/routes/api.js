module.exports = function(app,config) {

    // Support REST call
    app.post('/api/conversation',function(req,res){
        if(!req.body){
          res.status(400).send({error:'no post body'});
        } else {
          if (req.body.context.type !== undefined && req.body.context.type == "sodb") {
            conversation.sobdConversation(config,req,res);
          } else {
            conversation.itSupportConversation(config,req,res);
          }
        }
    });
    }