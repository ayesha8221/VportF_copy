<template>
    <div>
        <div class="container d-flex justify-content-center align-content-center">
                <div class="col-sm-9 p-3">
                    <div class="card m-2 p-3 contact">
                        <form action="https://formspree.io/f/mknlwave" method="POST">
                        <div class="mb-3">
                            <label class="form-label"> Full Name</label>
                            <input type="text" class="form-control border-2" name="Name" placeholder="Full Name" required />
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label"> Email address </label>
                            <input type="email" class="form-control border-2" name="Email" placeholder="@yahoo.com" required />
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label justify-content-start"> Phone Number </label>
                            <input type="tel" class="form-control border-2" name="Contact" placeholder="+27" required/>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label"> Leave a Message </label>
                            <textarea class="form-control border-2" name="Message" rows="5" placeholder="Please drop us any feedback or concerns. We love hearing from you!" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn ">Submit</button>
                    </form>
                </div>
                  </div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.card.m-2.p-3.contact {
    box-shadow: 2px 2px 2px grey;
    background-color: rgb(0, 0, 0);
}

.container.container.d-flex.justify-content-center.align-content-center.justify-content-center.align-content-center {
    padding-top: 60px !important;
}




    
</style>