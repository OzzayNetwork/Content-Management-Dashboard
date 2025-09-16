<template>
    <div class="mb-4 mb-md-5 mt-">
        <router-link to="/" class="d-block auth-logo">
            <img src="../../assets/images/color-log0.svg" alt="PaySol Logo" height="30" class="auth-logo-dark">
            <img src="../../assets/images/logo-light.png" alt="PaySol Logo Light" height="30" class="auth-logo-light">
        </router-link>
    </div>

</template>

<script>

import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
    name: 'SideBar',
    setup() {
        const route = useRoute();

        // Reactive current path
        const currentPath = computed(() => route.path);
        const currentFullPath = computed(() => route.fullPath);

        // Helper function to check if a Vue route is active
        const isActive = (path) => {
            return currentPath.value === path;
        };

        // Helper function to check if current page matches (for regular HTML links)
        const isCurrentPage = (page) => {
            // Extract filename from current URL
            const currentPage = window.location.pathname.split('/').pop();
            return currentPage === page || window.location.href.includes(page);
        };

        // Helper function to check if parent menu should be active (has active children)
        const isActiveParent = (childPages) => {
            // Check Vue routes
            const hasActiveVueRoute = childPages.some(page =>
                page.startsWith('/') && currentPath.value === page
            );

            // Check HTML pages
            const hasActiveHtmlPage = childPages.some(page =>
                !page.startsWith('/') && isCurrentPage(page)
            );

            return hasActiveVueRoute || hasActiveHtmlPage;
        };

        // Debug helper to see current route info
        const logCurrentRoute = () => {
            console.log('Current route:', {
                path: currentPath.value,
                fullPath: currentFullPath.value,
                name: route.name,
                params: route.params,
                query: route.query
            });
        };

        console.log('Sidebar initialized with current path:', currentPath.value);

        // Call this to debug current route
        // logCurrentRoute();

        return {
            isActive,
            isCurrentPage,
            isActiveParent,
            currentPath,
            logCurrentRoute
        };
    }
}

</script>

<style lang="scss" scoped></style>