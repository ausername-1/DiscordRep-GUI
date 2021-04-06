const form = document.getElementById('checkrep')
form.addEventListener('submit', checkrep)

async function checkrep(event) {
 event.preventDefault()
 const userid = document.getElementById('id').value;
 const key = document.getElementById('key').value;
 const data = await fetch(`https://discordrep.com/api/v3/rep/${userid}` , {
     headers: {"Authorization": key}
 }).then((res => res.json()))
 document.getElementById('downvotes').innerHTML = `<b>Down Votes: ${data.downvotes}</b><br>`
 document.getElementById('optout').innerHTML = `<b>Opt Out? ${data.optout}</b><br>`
 document.getElementById('rank').innerHTML = `<b>Rank: ${data.rank}</b><br>`
 document.getElementById('registered').innerHTML = `<b>Registered: ${data.registered}</b><br>`
 document.getElementById('staff').innerHTML = `<b>Staff? ${data.staff}</b><br>`
 document.getElementById('upvotes').innerHTML = `<b>Upvotes: ${data.upvotes}</b><br>`
 document.getElementById('xp').innerHTML = `<b>XP: ${data.xp}</b><br>`

}

const form2 = document.getElementById('checkinfractions')
form2.addEventListener('submit', checkinfractions)

async function checkinfractions(event) {
    event.preventDefault()
    const userid = document.getElementById('id2').value;
    const key = document.getElementById('key2').value;
    const data = await fetch(`https://discordrep.com/api/v3/infractions/${userid}` , {
        headers: {"Authorization": key}
    }).then((res => res.json()))
    console.log(data)
    document.getElementById('type').innerHTML = `<b>Type: ${data.type}</b><br>`
}