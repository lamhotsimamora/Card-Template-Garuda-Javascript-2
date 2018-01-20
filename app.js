/**
 * Prepare Layout Card
 */
function setup()
{
	var template = '';
	for (var i = 0; i < $count_data; i++) 
	{
		template += window['$card'+i].render();
	}
	return template;
}

$layout.setContent(
	setup()
);

/**
 * Prepare Data
 */
$getUser = __({
  url:"https://uinames.com/api/?ext&amount="+$count_data,
  method:"get"
});

$getUser.request($data=>{
	var data = JSON.parse($data);
	if (data)
	{
		var j = 0;
		for (var i = 0; i < $count_data ; i++) 
		{
			let username = data[i].name;
			let phone    = data[i].phone;
			let age      = data[i].age;
			let email    = data[i].email;
			let photo    = data[i].photo;
			__({
				el:"card"+j,
				html:{
					single:{
						username:username,
						email:email,
						age:age,
						photo:photo,
						phone:phone,
						viewProfile:"viewProfile"
					}
				}
			});
			j++;
		}
		ready = true;
		$layout.removeAttr('style');
		$loading.hide();
	}
});


function viewProfile(id)
{
    $btn = _createBtnView(id);
    $btn.setContent(
    	'You click { '+id+' }'
	);
}
