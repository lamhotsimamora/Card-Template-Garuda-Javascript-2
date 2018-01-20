class cardHtml
{
	constructor(d)
	{
		if (d)
		{
			this.id = d.id  ? d.id : undefined;
		}
	}

	render()
	{
		return '<div id="'+this.id+'" class="card" style="width: 18rem;">'+
				'<img class="card-img-top" src="#photo#" alt="#username#">'+
				'<div class="card-body">'+
				'<h5 class="card-title">#username#</h5>'+
				'<p class="card-text">Email : <strong>#email#</strong></p>'+
				'<p class="card-text">Age : <strong>#age#</strong></p>'+
				'<p class="card-text">Phone   : <strong>#phone#</strong></p>'+
				'<a id="btn_'+this.id+'" onclick="#viewProfile#(this.id);" class="btn btn-primary">View..</a>'+
				'</div>'+
				'</div><br>';
	}
}

/**
 * If you change this value $count_data, 
 * Count of data will automatically set up
 * @type {integer}
 */
const $count_data = 10;

for (let i = 0; i < $count_data; i++) 
{ 
	let $var1 = '$card';
	let $var2 = i;
	let $var = $var1.concat($var2);
	window[$var] = new cardHtml({
	  id:"card"+i
	});
}

function _createBtnView(id)
{	
	return __({
		el:id
	});
}

$layout = __({
  el:"layout"
});


$loading = __({
  el:"loading"
});


$txt_tot = __({
  el:"txt_tot",
});


$txt_tot.setValue("Total Data "+$count_data);
