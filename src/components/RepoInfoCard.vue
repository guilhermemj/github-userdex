<template>
  <v-card>
    <v-card-text>
      <p class="mb-2">
        <a :href="repoData.html_url" class="title" style="text-decoration: none;">
          {{repoData.name}}
        </a>
      </p>

      <p class="mb-2" style="min-height: 42px;">
        {{repoData.description}}
      </p>

      <v-container class="pa-0 caption">
        <v-layout>
          <v-flex shrink v-if="repoData.stargazers_count > 0">
            <v-tooltip bottom>
              <template slot="activator">
                <v-icon size="16">star</v-icon>
                {{repoData.stargazers_count}}
              </template>

              <span>Stars</span>
            </v-tooltip>
          </v-flex>

          <v-flex shrink v-if="repoData.forks_count > 0">
            <v-tooltip bottom>
              <template slot="activator">
                <v-icon size="16">share</v-icon>
                {{repoData.forks_count}}
              </template>

              <span>Forks</span>
            </v-tooltip>
          </v-flex>

          <v-flex text-xs-right>
            Updated at {{(new Date(repoData.updated_at)).toLocaleDateString()}}
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RepoInfoCard',

  props: {
    repoData: {
      type: Object,
      required: true,
    },
  },
};
</script>
