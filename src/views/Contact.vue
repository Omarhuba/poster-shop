<template>
    <div class="contact">
        <form action="/">
            <h1>Contact Us</h1>
            <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
            </div>
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button>SUBMIT</button>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
    display: flex;
    align-items: center;
    background-color: black;
    height: 100vh;
}
form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    div {
        display: flex;
        justify-content: space-between;
    }
    input {
        margin: 0.5rem;
        padding: 0.5rem;
        width: 50%;
    }
    textarea {
        margin: 0.5rem;
        padding: 0.5rem;
    }
    h1 {
        color: white;
        text-align: center;
    }
    button {
        width: fit-content;
        align-self: flex-end;
        margin-right: 0.5rem;
        padding: 0.5rem;
        background-color: coral;
    }
}
</style>
