<template>
    <div class="contact">
    <h3>Contact Form</h3>
    <form action="" class="form">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    <label for="country">Post</label>
    <select>
      <option value="">ITHS</option>
      <option value="">David</option>
      <option value="">Lotta</option>
    </select>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    <button class="button">
        <router-link to="/">
    Submit
        </router-link>
    </button>
  </form>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
   
 .contact {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
}
.form{
    width: 700px;
    justify-content: center;
    align-items: center;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
