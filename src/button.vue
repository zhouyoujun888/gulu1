<template>
    <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click2')">
        <!-- <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg> -->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
export default {
    // props: ['icon', 'iconPosition']
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                // if (value !== 'left' && value !== 'right') {
                //     return false
                // } else {
                //     return true
                // }
                return value === "left" || value === 'right'
            }
        }
    }
}

</script>

<style lang="scss">
@keyframes spin {
    0% {
        transform: rotate (0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading {
    animation: spin 2.5s infinite linear;
}

.g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:active {
        background-color: var(--button-active-bg);
    }

    &:focus {
        outline: none;
    }

    >.content {
        order: 2;
    }

    >.icon {
        order: 1;
        margin-right: .3em;
    }


    &.icon-right {
        >.content {
            order: 1;
        }

        >.icon {
            order: 2;
            margin-left: .3em;
        }


    }
}
</style>