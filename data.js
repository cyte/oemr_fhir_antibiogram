
async function loadData()
{
    const female_response = await fetch('female.json');
    const male_response = await fetch('male.json');
    male_obj= await male_response.json();
    female_obj=await female_response.json();
    console.log(female_obj); 
    return male_obj,female_obj;
};

async function loadJSON(file_name)
{
    const json_response = await fetch(file_name);
    const json_result = await json_response.json();
    const json_val = JSON.parse(json_result);
    //onsole.log(json_val);
    return json_val;
    
};
