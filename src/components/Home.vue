<template>
    <div class="container" style=" margin-top:100px; width: 1050px; height: 730px;background-image: url('https://img.freepik.com/vecteurs-libre/gestionnaire-liste-controle-creant-plan-evenement-developpement-service-gestion-planification-evenements-comment-planifier-evenement-concept-logiciel-planification-illustration-isolee-bleu-corail-rose_335657-1351.jpg?w=996&t=st=1672866955~exp=1672867555~hmac=b7154b7f989eb829faebaac6590300869c327e535868f45c0d8756f5734050fe')" >
       
        <h2 v-if="user"> Welcome {{user.nom}} {{user.prenom}}   </h2>
        <h2 v-if="!user">Welcome Guest</h2>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name : 'HomE',
  computed :{
      ...mapGetters(['user'])
    }  
}
</script>
<style scoped>
body{
    margin-top: 60px;
}
</style>