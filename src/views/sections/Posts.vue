<template>
  <base-section
    id="posts"
    space="56"
  >
    <base-section-heading
      color="grey lighten-2"
      title="Noticias"
    />
    <v-container>

       <div v-if="posts">

        <vue-good-table
          :columns="columns"
          :rows="posts"
          :lineNumbers="true"
          :defaultSortBy="{ field: 'id', type: 'desc' }"
          :globalSearch="false"
          :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 10,
            perPageDropdown: [10, 20],
            rowsPerPageLabel: 'Noticias por página',
            position: 'bottom',
            dropdownAllowAll: false,
            setCurrentPage: 1,
            nextLabel: 'siguiente',
            prevLabel: 'anterior',
            ofLabel: 'de'
          }"
          :search-options="{ enabled: true, placeholder: 'Buscar' }"
          styleClass="vgt-table"          
        >

        <div slot="table-actions">
          <base-btn
            :color="'accent'"
            outlined
            @click="showNewPost()"
          >
            Cargar Noticia
          </base-btn>
        </div>

        <div slot="emptystate" class="has-text-centered">
          <h3 class="h3">No hay noticias para mostrar</h3>
        </div>
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'acciones'">

            <v-icon
              medium
              title="Editar"
              color="#8AC1F8"
              @click="showEditPost(props.row.id)"
            >
              mdi-pencil
            </v-icon>

            <v-icon
              medium
              title="Eliminar"
              color="#8AC1F8"
              @click="deletePost(props.row.id)"
            >
              mdi-delete
            </v-icon>

          </span>
        </template>

      </vue-good-table>

      </div>

    </v-container>

    <!-- a partir de acá modal de nueva noticia -->
    <div>
      <v-row justify="center">
        <v-dialog
          v-model = dialog
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar
              dark
              color="#355173"
            >
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Nueva Noticia</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  dark
                  text
                  @click="savePost()"
                >
                  Guardar
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-container>

            <form ref="form">
              
              <base-text-field 
                type="text" 
                v-model="post.title" 
                label="Título"
                name="noticiaTitulo" 
              />

              <base-textarea
                type="text"
                v-model="post.text"
                label="Texto" 
                name="noticiaTexto"
              />
            </form>
            </v-container>

          </v-card>
        </v-dialog>
      </v-row>
    </div>
    
  </base-section>

</template>

<script>

  // import the styles
  import 'vue-good-table/dist/vue-good-table.css'
  import { VueGoodTable } from 'vue-good-table';

  export default {
    name: 'Posts',
    components: {
      VueGoodTable,
    },

    data() {
      return {
        dialog: false,
        posts: null,
        post: {
          id: '',
          title: '',
          text: ''
        },
        columns: [
          {
            label: 'Id',
            field: 'id',
            type: 'number'
          },
          {
            label: 'Título',
            field: 'title',
          },
          // {
          //   label: 'Texto',
          //   field: 'text',
          // },
          {
            label: 'Fecha de creación',
            field: 'createdAt.date',
            // type: 'date',
            // dateInputFormat: 'yyyy-MM-dd hh:mm:ss',
            // dateOutputFormat: 'dd/MM/yyyy',
          },
          {
            label: 'Acciones',
            field: 'acciones'
          }
        ],
      }
    },

    created () {
      this.getPosts()
    },
    
    methods: {
      async getPosts() {
        const response = await this.$axios.get('/api/posts')
        this.posts = response.data
      },
      async savePost() {
     
        let form = {
          title: this.post.title,
          text: this.post.text
        }

        let response 

        if (this.post.id) {
          
          form.id = this.post.id
          response = await this.$axios.put('/api/posts/' + this.post.id, form)
      
        } else {

          response = await this.$axios.post('/api/posts', form)
          
        }

        if (response.data.status == 200) {
          this.$swal.fire(
            this.post.id ? 'Noticia actualizada' : 'Noticia creada',
            '',
            'success'
          )
          this.getPosts()
        } else {
          this.$swal.fire(
            'Error',
            '',
            'success'
          )
        }

        this.dialog = false
      },
      async deletePost(postId) {
        await this.$axios.delete('/api/posts/' + postId)
        this.getPosts()
      },
      showNewPost() {
        this.post.id = ''
        this.post.title = ''
        this.post.text = ''
        this.dialog = true
      },
      async showEditPost(postId) {
        const response = await this.$axios.get('/api/posts/' + postId)
        this.post.id = response.data.id
        this.post.title = response.data.title
        this.post.text = response.data.text
        this.dialog = true
      }
     
    }
  }

</script>

<style>
.vgt-input,
.vgt-select {
  width: 50%;
}
.vgt-global-search,
.vgt-table thead th,
.vgt-table th.line-numbers,
.vgt-table th.vgt-checkbox-col {
  background: linear-gradient(#ffffff, #ffffff);
  color: #5EAEF6;
  border-right: none;
  border-bottom: 1px solid #ffffff;
}
table.vgt-table {
  font-size: 14px;
  border-collapse: collapse;
  background-color: #ffffff;
  table-layout: auto;
  border: 1px solid #ffffff;
}
.vgt-global-search {
  padding: 10px 0;
  border: 1px solid #ffffff;
}
.vgt-wrap__footer {
  color: #ffffff;
  padding: 1em;
  border: 1px solid #ffffff;
  background: linear-gradient(#ffffff, #ffffff);
}
.vgt-wrap__footer .footer__navigation__page-btn {
  text-decoration: none;
  color: #606266;
  font-weight: 700;
  white-space: nowrap;
}
.vgt-table thead th.sorting-asc:after {
  border-bottom: 5px solid #5EAEF6;
}
.vgt-table thead th.sorting-desc:before {
  border-top: 5px solid #5EAEF6;
}
.vgt-right-align {
  text-align: left;
}
table.vgt-table td {
  padding: 0.5em 0.5em 0.5em 0.5em;
  vertical-align: middle;
  border-bottom: 1px solid #dcdfe6;
  color: #606266;
}
.vgt-right-align {
  text-align: left;
}
.vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {
  border-left: 6px solid #5EAEF6;
  margin-left: -3px;
}
.vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {
  border-right: 6px solid #5EAEF6;
  margin-left: -3px;
}
</style>
